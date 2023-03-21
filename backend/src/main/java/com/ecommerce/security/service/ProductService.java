package com.ecommerce.security.service;

import java.util.List;
import java.util.Optional;

import com.ecommerce.security.model.Product;

public interface ProductService {
    List<Product> findAllProducts();
    Optional<Product> findById(Long id);
    Product saveProduct(Product product);
}
