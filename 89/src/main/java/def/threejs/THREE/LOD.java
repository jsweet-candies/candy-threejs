package def.threejs.THREE;
public class LOD extends Object3D {
    public LOD(){}
    public Object[] levels;
    native public void addLevel(Object3D object, double distance);
    native public Object3D getObjectForDistance(double distance);
    native public void raycast(Raycaster raycaster, Object intersects);
    native public void update(Camera camera);
    native public Object toJSON(Object meta);
    /**
     * @deprecated Use {@link LOD#levels .levels} instead.
     */
    public Object[] objects;
    native public void addLevel(Object3D object);
}

