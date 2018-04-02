package def.threejs.THREE;
public class ShapePath extends def.js.Object {
    public ShapePath(){}
    public Object[] subPaths;
    public Object currentPath;
    native public void moveTo(double x, double y);
    native public void lineTo(double x, double y);
    native public void quadraticCurveTo(double aCPx, double aCPy, double aX, double aY);
    native public void bezierCurveTo(double aCP1x, double aCP1y, double aCP2x, double aCP2y, double aX, double aY);
    native public void splineThru(Vector2[] pts);
    native public Shape[] toShapes(Boolean isCCW, Object noHoles);
}

