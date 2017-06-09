package def.threejs.three;
/**
     * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
     */
public class Path extends CurvePath<Vector2> {
    public Path(Vector2[] points){}
    public PathAction[] actions;
    native public void fromPoints(Vector2[] vectors);
    native public void moveTo(double x, double y);
    native public void lineTo(double x, double y);
    native public void quadraticCurveTo(double aCPx, double aCPy, double aX, double aY);
    native public void bezierCurveTo(double aCP1x, double aCP1y, double aCP2x, double aCP2y, double aX, double aY);
    native public void splineThru(Vector2[] pts);
    native public void arc(double aX, double aY, double aRadius, double aStartAngle, double aEndAngle, Boolean aClockwise);
    native public void absarc(double aX, double aY, double aRadius, double aStartAngle, double aEndAngle, Boolean aClockwise);
    native public void ellipse(double aX, double aY, double xRadius, double yRadius, double aStartAngle, double aEndAngle, Boolean aClockwise, double aRotation);
    native public void absellipse(double aX, double aY, double xRadius, double yRadius, double aStartAngle, double aEndAngle, Boolean aClockwise, double aRotation);
    native public Shape[] toShapes(Boolean isCCW, Object noHoles);
    public Path(){}
}

