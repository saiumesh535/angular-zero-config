
/* checks for localstorage */
export const admin = 'admin';

export const isAdmin = ( ) => localStorage.getItem(admin) === 'true';

export const setAdmin = ( ) => localStorage.setItem(admin, 'true');
