package com.ecommerce.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.security.model.Product;
import com.ecommerce.security.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
    
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @CrossOrigin
    @GetMapping
    public List<Product> findAllProducts() {
        return productService.findAllProducts();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Product> findProductById(@PathVariable("id") Long id) {
        return productService.findById(id);
    }

    @CrossOrigin
    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
}
