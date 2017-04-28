package def.threejs.three;
public class ArrowHelper extends Object3D {
    public ArrowHelper(Vector3 dir, Vector3 origin, double length, double hex, double headLength, double headWidth){}
    public Line line;
    public Mesh cone;
    native public void setDirection(Vector3 dir);
    native public void setLength(double length, double headLength, double headWidth);
    native public void setColor(double hex);
    public ArrowHelper(Vector3 dir, Vector3 origin, double length, double hex, double headLength){}
    public ArrowHelper(Vector3 dir, Vector3 origin, double length, double hex){}
    public ArrowHelper(Vector3 dir, Vector3 origin, double length){}
    public ArrowHelper(Vector3 dir, Vector3 origin){}
    public ArrowHelper(Vector3 dir){}
    native public void setLength(double length, double headLength);
    native public void setLength(double length);
    protected ArrowHelper(){}
}

