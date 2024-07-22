Feature: Coupon functionality check
    
    Scenario: Add Coupon
        Given Coupon page open
        When Add coupon form fill with all the mandatory field
        Then Save the add coupon form

    Scenario: Delete Coupon
        Given Coupon list
        When  Click on the delete button
        Then  Coupon is deleted