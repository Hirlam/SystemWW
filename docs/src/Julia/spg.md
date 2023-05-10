# Documenter test

Interactive plot below is created in github actions.  


```@setup 1
# only need to serve figures with documenter #hide
using JSServe, WGLMakie #hide
page = Page(offline=true, exportable=true) #hide
```

```@setup 1
using FileIO  #hide
logo = load("../assets/logo.png") #hide 

```

```@example 1
using GaussianRandomFields, WGLMakie 
set_theme!(theme_black(), resolution=(800, 600)) #hide

# Domain 
x = 1:188
y = 1:268

# 2D Gaussian covariance function length scale 20,
cov = CovarianceFunction(2, Gaussian(20, σ= 10.0)) 

grf = GaussianRandomField(cov, CirculantEmbedding(), x, y)

# Create random sample 
data = sample(grf)

s = surface(data,color=logo)
zoom!(s.axis.scene,0.5) #hide
s #hide
```
