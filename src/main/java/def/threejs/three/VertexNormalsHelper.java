package def.threejs.three;
public class VertexNormalsHelper extends LineSegments {
    public VertexNormalsHelper(Object3D object, double size, double hex, double linewidth){}
    public Object3D object;
    public double size;
    native public void update(Object3D object);
    public VertexNormalsHelper(Object3D object, double size, double hex){}
    public VertexNormalsHelper(Object3D object, double size){}
    public VertexNormalsHelper(Object3D object){}
    native public void update();
    protected VertexNormalsHelper(){}
}

