
# Time dependent SPG 

```@example 2 
using GaussianRandomFields, GLMakie 
set_theme!(theme_black(), resolution=(800, 600)) #hide

# Domain 
x = 1:188
y = 1:268
t = 1:100

# 3D Gaussian covariance function length scale 20,
cov = CovarianceFunction(3, Gaussian(20, σ= 10.0)) 

grf = GaussianRandomField(cov, CirculantEmbedding(), x, y, t)

# Create random sample 
data = sample(grf)

fig = Figure() 
ax = Axis3(fig[1,1])
to = Observable(1) 
pd = @lift(data[:,:,$to])
surface!(ax,pd)
dir = @__DIR__ 

record(fig,"$dir/spg.mp4",t,framerate=10) do ti 
   to[] = ti 
   ax.azimuth[] = ax.azimuth[]+0.01
end 
```


![](./spg.mp4)
