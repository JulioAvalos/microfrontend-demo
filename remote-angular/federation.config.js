const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
    name: 'remoteAngular',
    exposes: {
        './Routes': './src/app/app.routes.ts',
        './Store': './src/app/remote-store.export.ts'  // <-- New entry for the store export
    },
    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto'
        }),
        // Explicit NgRx 19 sharing
        '@ngrx/store': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '^19.1.0'
        },
        '@ngrx/effects': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '^19.1.0'
        },
        '@ngrx/store-devtools': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '^19.1.0'
        },
        // Core Angular 19 dependencies
        '@angular/core': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '^19.1.0'
        },
        'rxjs': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '~7.8.0'
        }
    },
    skip: [
        'rxjs/ajax',
        'rxjs/fetch',
        'rxjs/testing',
        'rxjs/webSocket',
        '@ngrx/store-devtools' // Skip devtools in remote
        // Add further packages you don't need at runtime
    ]
    // Please read our FAQ about sharing libs:
    // https://shorturl.at/jmzH0
});
