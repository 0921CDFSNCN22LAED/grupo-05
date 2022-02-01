CREATE TABLE vinos(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(600) NOT NULL,
	bodega_id INT NOT NULL,
	anio INT NOT NULL,
	descripcion VARCHAR(5000),
	precio INT NOT NULL,
	imagen VARCHAR(400) NOT NULL,
	stock INT NOT NULL,
	uva_id INT NOT NULL,
	categoria_id INT NOT NULL,
	FOREIGN KEY(bodega_id) REFERENCES bodegas(id),
	FOREIGN KEY(uva_id) REFERENCES uvas(id),
	FOREIGN KEY(categoria_id) REFERENCES categorias(id)
);


CREATE TABLE bodegas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL
);

CREATE TABLE uvas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL
);

CREATE TABLE categorias (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL
);

CREATE TABLE clientes (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL,
	email VARCHAR(200) NOT NULL UNIQUE,
	contrasenia VARCHAR(200) NOT NULL
);

CREATE TABLE administradores (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL,
	email VARCHAR(200) NOT NULL UNIQUE,
	contrasenia VARCHAR(200) NOT NULL
);

CREATE TABLE cava (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	cliente_id INT NOT NULL,
	vino_id INT NOT NULL,
	FOREIGN KEY(cliente_id) REFERENCES clientes(id),
	FOREIGN KEY(vino_id) REFERENCES vinos(id)
);

CREATE TABLE favoritos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	cliente_id INT NOT NULL,
	vino_id INT NOT NULL,
	FOREIGN KEY(cliente_id) REFERENCES clientes(id),
	FOREIGN KEY(vino_id) REFERENCES vinos(id)
);

CREATE TABLE facturas_de_compras (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	direccion VARCHAR(500) NOT NULL,
	cp INT NOT NULL,
	fecha_compra DATE NOT NULL,
	cliente_id INT NOT NULL,
	vino_id INT NOT NULL,
	total INT NOT NULL,
	FOREIGN KEY(cliente_id) REFERENCES clientes(id),
	FOREIGN KEY(vino_id) REFERENCES vinos(id)
);
