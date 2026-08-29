 feature/alumni-network-directory
import admin from 'firebase-admin';

const adminSdk = admin as any;

import { getApps, initializeApp, cert, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
 main

/**
 * Initializes the Firebase Admin SDK for server-side operations.
 * This is required for verifying ID tokens and managing custom claims (RBAC).
 */
 feature/alumni-network-directory
if (!adminSdk.apps || !adminSdk.apps.length) {

if (!getApps().length) {
 main
    const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
        ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
        : undefined;

 feature/alumni-network-directory
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

    initializeApp({
        credential: serviceAccount
            ? cert(serviceAccount)
            : applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
    });
}

export const auth = getAuth();
 main
