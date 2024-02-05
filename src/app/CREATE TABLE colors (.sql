 CREATE TABLE colors (
            id integer PRIMARY KEY, 
            name varchar(100)
          );
          
          CREATE TABLE products_colors (
            products_id integer REFERENCES products(id), 
            colors_id integer REFERENCES colors(id),
            PRIMARY KEY (products_id, colors_id)
          );
        
          CREATE TYPE size_type as ENUM (
           'XS',
           'S',
           'M',
           'L',
           'XL'
          );
          CREATE TABLE sizes (
            id integer PRIMARY KEY, 
            size TYPE size_type 
          );
          CREATE TABLE product_sizes (
            products_id integer REFERENCES products(id), 
            size_id integer REFERENCES sizes(id),
            PRIMARY KEY (products_id, sizes_id)
          );