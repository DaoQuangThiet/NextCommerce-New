const next = require('next');
const express = require('express');
const wooConfig = require('./wooConfig');

const WooCommerceAPI = require('woocommerce-api');
const { response } = require('express');

const WooCommerce = new WooCommerceAPI({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
  });

const port = 3000;
const dev =  process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
        const server = express();
        server.get('/getProducts',(req,response) => {
            WooCommerce.get('products' , function(err,data,res) {
                response.json(JSON.parse(res));
            });
        })
        server.get('/getProducts/:id',(req,response) => {
            console.log(req.params);
            WooCommerce.get('products/:id' , function(err,data,res) {
                response.json(JSON.parse(res));
            });
        })

        // server.get('/products/:id', (req, res) =>{
        //     const actualPage = '/product'
        //     const queryParams = { id: req.params.id }
        //     app.rennder(req, res,actualPage, queryParams)
        // })

        server.get('*',(req,res) => {
            return handle(req,res);
        });

        server.listen( port, err => {
            if(err) {
                throw err;
            }
            console.log(`Ready on ${port}`);
        })
    })
    .catch( ex => {
        console.error(ex.stack);
        process.exit(1);
    });;