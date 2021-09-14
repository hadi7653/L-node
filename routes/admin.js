var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const products = [
    {
      name:"Ipone 11pro",
      catagary:"mobile",
      description : "devolped by apple",
      image :"https://www.did.ie/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/w/mwhk2ba_3.jpg"
    },
    {
      name:"RedMe note 7pro",
      catagary:"mobile",
      description : "devolped by xiomi",
      image :"https://th.bing.com/th/id/OIP.OlcS6TWaH6A-WLEZreuEyAHaHH?pid=ImgDet&rs=1"
    },
    {
      name:"node 8pro",
      catagary:"mobile",
      description : "devolped by oneplus",
      image :"https://www.pakmobizone.pk/wp-content/uploads/2019/10/xiaomi-Redmi-8-2.jpg"
    },
    {
      name:"samsung note 8",
      catagary:"mobile",
      description : "devolped by samsung",
      image :"https://th.bing.com/th/id/OIP.QSL3JetD9b9FO-T_3H8_oAHaHm?pid=ImgDet&rs=1"
    },
  ]


  res.render('admin/view-products', {admin:true , products})
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id);
    image.mv('./public/product-images/'+id+'.jpg', (err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err);
      }
    })

  })
  
})

module.exports = router;
