@purchasingProcess
Feature: Proceso de compra en Sauce Demo
  Como un cliente de Sauce Demo,
  quiero poder iniciar sesión, agregar productos al carrito y completar una compra
  para poder adquirir los productos que necesito

@hpt
Scenario Outline:Verificar proceso de compra satisfactorio- "<CP>"
    Given que me logueo correctamente en Sauce Demo
    When agrego productos '<productos>' al carrito de compras
    And voy a la página de You Cart donde lista los productos '<productos>' del carrito de compras, hago click en Checkout
    And me redirije a la página de Your Information donde ingreso mi informacion "<firstName>", "<lastName>", "<postalCode>" y hago click en Continue
    And me redirije a la página de Checkout: Overview, hago click en Finalizar
    Then se completa la compra y me muestra la página de Pago: ¡Completado!
  Examples:
    |CP          | productos                                         |firstName| lastName|postalCode|
    |1 producto  | ["Sauce Labs Backpack"]                           |  Nicol      | Arango  | 15000  |
    |2 productos | ["Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"]|   Luna       | Corrales   |   11000           |
