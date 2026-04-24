/**
 * AuthManager - localStorage-based authentication for Muse.
 * Handles signup, login, forgot password, and session management.
 */
var AuthManager = (function () {
    var USERS_KEY = 'muse_users';
    var SESSION_KEY = 'muse_session';

    // Get all registered users from localStorage
    function getUsers() {
        try {
            var data = localStorage.getItem(USERS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    // Save users array to localStorage
    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    // Get current session
    function getSession() {
        try {
            var data = localStorage.getItem(SESSION_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }

    // Save session
    function saveSession(user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify({
            username: user.username,
            email: user.email,
            loggedInAt: new Date().toISOString()
        }));
    }

    // Clear session
    function clearSession() {
        localStorage.removeItem(SESSION_KEY);
    }

    return {
        /**
         * Register a new user
         */
        signup: function (username, email, password) {
            if (!username || !email || !password) {
                return { success: false, message: 'All fields are required.' };
            }
            if (password.length < 4) {
                return { success: false, message: 'Password must be at least 4 characters.' };
            }

            var users = getUsers();

            // Check if username already exists
            for (var i = 0; i < users.length; i++) {
                if (users[i].username.toLowerCase() === username.toLowerCase()) {
                    return { success: false, message: 'Username already taken!' };
                }
                if (users[i].email.toLowerCase() === email.toLowerCase()) {
                    return { success: false, message: 'Email already registered!' };
                }
            }

            var newUser = {
                username: username,
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            saveUsers(users);
            saveSession(newUser);

            return { success: true, message: 'Account created! Welcome, ' + username + '!' };
        },

        /**
         * Login with username and password
         */
        login: function (username, password) {
            if (!username || !password) {
                return { success: false, message: 'Please enter both fields.' };
            }

            var users = getUsers();

            for (var i = 0; i < users.length; i++) {
                if (users[i].username.toLowerCase() === username.toLowerCase()) {
                    if (users[i].password === password) {
                        saveSession(users[i]);
                        return { success: true, message: 'Welcome back, ' + users[i].username + '!' };
                    } else {
                        return { success: false, message: 'Incorrect password.' };
                    }
                }
            }

            return { success: false, message: 'No account found with that username.' };
        },

        /**
         * Logout current user
         */
        logout: function () {
            clearSession();
        },

        /**
         * Check if user is logged in
         */
        isLoggedIn: function () {
            return getSession() !== null;
        },

        /**
         * Get current logged-in user info
         */
        getCurrentUser: function () {
            return getSession();
        },

        /**
         * Forgot password - verify email exists and generate code
         */
        forgotPassword: function (email) {
            if (!email) {
                return { success: false, message: 'Please enter your email.' };
            }

            var users = getUsers();
            var found = false;

            for (var i = 0; i < users.length; i++) {
                if (users[i].email.toLowerCase() === email.toLowerCase()) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                return { success: false, message: 'No account found with that email.' };
            }

            // Generate a 6-digit code (simulated)
            var code = '';
            for (var j = 0; j < 6; j++) {
                code += Math.floor(Math.random() * 10).toString();
            }

            return { success: true, code: code, message: 'Reset code sent!' };
        },

        /**
         * Reset password for a given email
         */
        resetPassword: function (email, newPassword) {
            if (!newPassword || newPassword.length < 4) {
                return { success: false, message: 'Password must be at least 4 characters.' };
            }

            var users = getUsers();
            var updated = false;

            for (var i = 0; i < users.length; i++) {
                if (users[i].email.toLowerCase() === email.toLowerCase()) {
                    users[i].password = newPassword;
                    updated = true;
                    break;
                }
            }

            if (updated) {
                saveUsers(users);
                return { success: true, message: 'Password reset successfully!' };
            }

            return { success: false, message: 'Something went wrong.' };
        },

        /**
         * Update the nav login button across all pages
         */
        updateNavLogin: function () {
            var navBtn = document.getElementById('navLoginBtn');
            var navText = document.getElementById('navLoginText');
            if (!navBtn || !navText) return;

            if (this.isLoggedIn()) {
                var user = this.getCurrentUser();
                navText.textContent = user.username;
                navBtn.onclick = function (e) {
                    e.preventDefault();
                    if (confirm('Logout from ' + user.username + '?')) {
                        AuthManager.logout();
                        window.location.href = 'login.html';
                    }
                };
            }
        }
    };
})();
