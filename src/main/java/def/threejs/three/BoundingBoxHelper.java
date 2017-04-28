package def.threejs.three;
public class BoundingBoxHelper extends Mesh {
    public BoundingBoxHelper(Object3D object, double hex){}
    public Object3D object;
    public Box3 box;
    native public void update();
    public BoundingBoxHelper(Object3D object){}
    public BoundingBoxHelper(){}
}

