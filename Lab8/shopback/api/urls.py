from django.http import JsonResponse
from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, ProductsByCategory

def api_home(request):
    return JsonResponse({"message": "Welcome to the API!", "endpoints": [
        "/api/products/",
        "/api/products/<int:id>/",
        "/api/categories/",
        "/api/categories/<int:id>/",
        "/api/categories/<int:id>/products/"
    ]})

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', ProductsByCategory.as_view(), name='products-by-category'),
]
