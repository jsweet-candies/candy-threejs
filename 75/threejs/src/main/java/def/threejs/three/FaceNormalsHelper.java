package def.threejs.three;
public class FaceNormalsHelper extends LineSegments {
    public FaceNormalsHelper(Object3D object, double size, double hex, double linewidth){}
    public Object3D object;
    public double size;
    native public void update(Object3D object);
    public FaceNormalsHelper(Object3D object, double size, double hex){}
    public FaceNormalsHelper(Object3D object, double size){}
    public FaceNormalsHelper(Object3D object){}
    native public void update();
    protected FaceNormalsHelper(){}
}

