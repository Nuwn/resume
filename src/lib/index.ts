// place files you want to import through the `$lib` alias in this folder.

export async function CopyToClipboard(value: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(value);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

export function calculateAge(birthdate: string) {
    const birthYear = parseInt(birthdate.substring(0, 2)) + 1900;
    const birthMonth = parseInt(birthdate.substring(2, 4)) - 1;
    const birthDay = parseInt(birthdate.substring(4, 6));

    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export async function loadTranslations(locale: string, path: string) {
    try {
        const translations = await import(`@locales/${path}/${locale}.json`);
        return translations.default; // Access the translations from the imported module
    } catch (error) {
        console.error(`Error loading translations for ${path}:`, error);
        return {}; // Return an empty object if translations cannot be loaded
    }
}

// Function to set a cookie with an expiration date
export function setCookie(name: string, value: string | undefined, days: number, document: Document): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    let cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;samesite=none;secure`;

    document.cookie = cookieString;
}

// Function to get a cookie by name
export function getCookie(name: string, document: Document): string {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() || '' : '';
}
