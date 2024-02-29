Feature: Product Detail Page tests
	As a customer, I want to test the product detail page functionalities

    Background:
		Given I'm on the product page 
		# Dado que estou na página de detalhes do produto

	Scenario: Validate price block 
		Then the product value is visible 
	#   Então o valor do produto fica visível

	Scenario: Validate product image
		Then The product image should be displayed 
	#   Então a imagem do produto deve ser exibida