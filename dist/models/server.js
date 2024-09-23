"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../routes/products"));
const conn_1 = __importDefault(require("../db/conn"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.port = process.env.PORT || '3001';
        this.api = (0, express_1.default)();
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnection();
    }
    listen() {
        this.api.listen(this.port, () => {
            console.log(`aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    router() {
        this.api.get('/', (req, res) => {
            res.json({
                msg: 'aplicacion corriendo mi compa'
            });
        });
        this.api.use('/api/productos/', products_1.default);
    }
    midlewares() {
        this.api.use(express_1.default.json());
        this.api.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.default.authenticate();
                console.log('base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('error en la conexion');
            }
        });
    }
}
exports.default = Server;
