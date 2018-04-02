package def.threejs.THREE;
public class Box2 extends def.js.Object {
    public Box2(Vector2 min, Vector2 max){}
    public Vector2 max;
    public Vector2 min;
    native public Box2 set(Vector2 min, Vector2 max);
    native public Box2 setFromPoints(Vector2[] points);
    native public Box2 setFromCenterAndSize(Vector2 center, Vector2 size);
    @jsweet.lang.Name("clone")
    native public Box2 Clone();
    native public Box2 copy(Box2 box);
    native public Box2 makeEmpty();
    native public Boolean isEmpty();
    native public Vector2 getCenter(Vector2 optionalTarget);
    native public Vector2 getSize(Vector2 optionalTarget);
    native public Box2 expandByPoint(Vector2 point);
    native public Box2 expandByVector(Vector2 vector);
    native public Box2 expandByScalar(double scalar);
    native public Boolean containsPoint(Vector2 point);
    native public Boolean containsBox(Box2 box);
    native public Vector2 getParameter(Vector2 point);
    native public Boolean intersectsBox(Box2 box);
    native public Vector2 clampPoint(Vector2 point, Vector2 optionalTarget);
    native public double distanceToPoint(Vector2 point);
    native public Box2 intersect(Box2 box);
    native public Box2 union(Box2 box);
    native public Box2 translate(Vector2 offset);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Box2 box);
    /**
     * @deprecated Use {@link Box2#isEmpty .isEmpty()} instead.
     */
    native public Object empty();
    /**
     * @deprecated Use {@link Box2#intersectsBox .intersectsBox()} instead.
     */
    native public Object isIntersectionBox(Object b);
    public Box2(Vector2 min){}
    public Box2(){}
    native public Vector2 getCenter();
    native public Vector2 getSize();
    native public Vector2 clampPoint(Vector2 point);
}

