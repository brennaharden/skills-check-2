CREATE TABLE products (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(25) NOT NULL,
    price INT NOT NULL,
    img TEXT
);

INSERT INTO products
(name, price, img)
VALUES
('Reeboks', 70, 'https://www.famousfootwear.com/productimages/shoes_ia92845.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60'),
('Onitsuka Tigers', 160, 'https://images.asics.com/is/image/asics/DL408_0490_SB_FR_GLB?$otat-product$'),
('Adidas Gazelles', 80, 'https://www.babyshop.com/images/622992/x_large.jpg');