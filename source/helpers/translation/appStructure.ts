enum HomeScreen {
    mainText = 'homeScreen-main-text',
    productName = 'homeScreen-product-name',
    productType = 'homeScreen-product-type',
    productPrice = 'homeScreen-product-price',
    noProductInfo = 'homeScreen-no-product-info',
    createNewProductTitle='homeScreen-create-new-product-title',
    editProductNavigationTitle='homeScreen-edit-product-navigation-title',
    deleteInfo = 'homeScreen-delete-info',
    cancelButton = 'homeScreen-cancel-button',
    deleteButton = 'homeScreen-delete-button',
}

enum AddAndEditScreen {
    inputProductName = 'addAndEditScreen-input-product-name',
    pickerProductType = 'addAndEditScreen-picker-product-type',
    pickerIntegrated = 'addAndEditScreen-picker-integrated',
    IntegratedpriceRange='addAndEditScreen-integrated-price-Range',
    pickerPerpherial = 'addAndEditScreen-picker-perpherial',
    inputProductPrice = 'addAndEditScreen-input-product-price',
    saveButton = 'addAndEditScreen-save-button',
    productExistInfo = 'addAndEditScreen-product-exist-info',
    cancelButton = 'addAndEditScreen-cancel'
}

export const tokens = {
    screens: {
        homeScreen: HomeScreen,
        addAndEditScreen: AddAndEditScreen,
    }
}