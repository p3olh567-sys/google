const express = require('express');
const helmet = require('helmet');
const app = express();

// Utiliser Helmet pour sécuriser les en-têtes HTTP
app.use(helmet());

// Configurer Content-Security-Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'self'"],
    workerSrc: ["'self'"],
    childSrc: ["'self'"],
    formAction: ["'self'"],
    upgradeInsecureRequests: [],
  },
}));

// Configurer X-Content-Type-Options
app.use(helmet.noSniff());

// Configurer X-Frame-Options
app.use(helmet.frameguard({ action: 'deny' }));

// Configurer X-Download-Options
app.use(helmet.ieNoOpen());

// Configurer X-Permitted-Cross-Domain-Policies
app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'none' }));

// Configurer Strict-Transport-Security
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));

// Configurer Referrer-Policy
app.use(hel
