@product
Feature: Agregar productos en Sauce Demo
Como cliente de Sauce Demo
quiero agregar productos al carrito
para realizar la compra de los productos seleccionados


@addToCart
Scenario Outline: Verificar la adición satisfactoria de productos al carrito de compras - '<CP>'
    Given que estoy en la página de productos de Sauce Demo
    When agrego productos '<productos>' al carrito de compras
    Then debe mostrarse la notificación de que fueron agregados
 Examples:
    |CP                        | productos |
    |1 producto                 | ["Sauce Labs Backpack"]    | 
    |2 productos                | ["Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"]    |   
