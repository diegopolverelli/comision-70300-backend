import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController.js';
import passport from 'passport';
export const router=Router()

router.get('/', ProductsController.getProducts)
router.post(
    "/",
    passport.authenticate("validaToken", {session:false}), 
    ProductsController.createProducto
)