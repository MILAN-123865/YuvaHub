import admin from 'firebase-admin';

const adminSdk = admin as any;

/**
 * Initializes the Firebase Admin SDK for server-side operations.
 * This is required for verifying ID tokens and managing custom claims (RBAC).
 */
if (!adminSdk.apps || !adminSdk.apps.length) {
    const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
        ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
        : undefined;

    if (typeof adminSdk.initializeApp === 'function') {
        adminSdk.initializeApp({
            credential: serviceAccount && adminSdk.credential
                ? adminSdk.credential.cert(serviceAccount)
                : (adminSdk.credential ? adminSdk.credential.applicationDefault() : undefined),
            projectId: process.env.FIREBASE_PROJECT_ID,
        });
    }
}

export const firebaseAdmin = admin;
export const auth = typeof adminSdk.auth === 'function' ? adminSdk.auth() : ({} as any);
