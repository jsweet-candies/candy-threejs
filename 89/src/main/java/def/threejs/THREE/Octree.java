package def.threejs.THREE;
public class Octree extends def.js.Object {
    public Octree(Object parameters){}
    native public void update();
    native public Object add(Object object, Object options);
    native public Object addDeferred(Object object, Object options);
    native public Object addObjectData(Object object, Object part);
    native public Object remove(Object object);
    native public Object extend(Octree octree);
    native public Object rebuild();
    native public Object updateObject(Object object);
    native public Object search(Vector3 position, double radius, Boolean organizeByObject, Vector3 direction);
    native public Object setRoot(Object root);
    native public double getDepthEnd();
    native public double getNodeCountEnd();
    native public double getObjectCountEnd();
    native public Object toConsole();
    public Octree(){}
    native public Object add(Object object);
    native public Object addDeferred(Object object);
}

