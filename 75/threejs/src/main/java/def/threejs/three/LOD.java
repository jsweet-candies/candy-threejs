package def.threejs.three;
public class LOD extends Object3D {
    public LOD(){}
    public Object[] levels;
    public Object[] objects;
    native public void addLevel(Object3D object, double distance);
    native public Object3D getObjectForDistance(double distance);
    native public void raycast(Raycaster raycaster, Object intersects);
    native public void update(Camera camera);
    @jsweet.lang.Name("clone")
    native public LOD Clone();
    native public LOD copy(LOD source);
    native public void addLevel(Object3D object);
}

