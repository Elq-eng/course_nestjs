"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONDODB,
    port: process.env.PORT || 3002,
    default_limit: +process.env.DEFAULT_LIMIT || 7
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=app.config.js.map