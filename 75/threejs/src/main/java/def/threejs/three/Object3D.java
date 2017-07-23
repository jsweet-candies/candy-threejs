package def.threejs.three;
/**
     * Base class for scene graph objects
     */
public class Object3D extends def.js.Object {
    public Object3D(){}
    /**
         * Unique number of this object instance.
         */
    public double id;
    /**
         *
         */
    public String uuid;
    /**
         * Optional name of the object (doesn't need to be unique).
         */
    public String name;
    public String type;
    /**
         * Object's parent in the scene graph.
         */
    public Object3D parent;
    /**
         * Array with object's children.
         */
    public Object3D[] children;
    /**
         * Up direction.
         */
    public Vector3 up;
    /**
         * Object's local position.
         */
    public Vector3 position;
    /**
         * Object's local rotation (Euler angles), in radians.
         */
    public Euler rotation;
    public String eulerOrder;
    /**
         * Global rotation.
         */
    public Quaternion quaternion;
    /**
         * Object's local scale.
         */
    public Vector3 scale;
    public Matrix4 modelViewMatrix;
    public Matrix3 normalMatrix;
    /**
         * When this is set, then the rotationMatrix gets calculated every frame.
         */
    public Boolean rotationAutoUpdate;
    /**
         * Local transform.
         */
    public Matrix4 matrix;
    /**
         * The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.
         */
    public Matrix4 matrixWorld;
    /**
         * When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property.
         */
    public Boolean matrixAutoUpdate;
    /**
         * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
         */
    public Boolean matrixWorldNeedsUpdate;
    public Layers layers;
    /**
         * Object gets rendered if true.
         */
    public Boolean visible;
    /**
         * Gets rendered into shadow map.
         */
    public Boolean castShadow;
    /**
         * Material gets baked in shadow receiving.
         */
    public Boolean receiveShadow;
    /**
         * When this is set, it checks every frame if the object is in the frustum of the camera. Otherwise the object gets drawn every frame even if it isn't visible.
         */
    public Boolean frustumCulled;
    public double renderOrder;
    /**
         * An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.
         */
    public Object userData;
    /**
         *
         */
    public static Vector3 DefaultUp;
    public static Boolean DefaultMatrixAutoUpdate;
    /**
         * This updates the position, rotation and scale with the matrix.
         */
    native public void applyMatrix(Matrix4 matrix);
    /**
         *
         */
    native public void setRotationFromAxisAngle(Vector3 axis, double angle);
    /**
         *
         */
    native public void setRotationFromEuler(Euler euler);
    /**
         *
         */
    native public void setRotationFromMatrix(Matrix4 m);
    /**
         *
         */
    native public void setRotationFromQuaternion(Quaternion q);
    /**
         * Rotate an object along an axis in object space. The axis is assumed to be normalized.
         * @param axis  A normalized vector in object space.
         * @param angle  The angle in radians.
         */
    native public Object3D rotateOnAxis(Vector3 axis, double angle);
    /**
         *
         * @param angle
         */
    native public Object3D rotateX(double angle);
    /**
         *
         * @param angle
         */
    native public Object3D rotateY(double angle);
    /**
         *
         * @param angle
         */
    native public Object3D rotateZ(double angle);
    /**
         * @param axis  A normalized vector in object space.
         * @param distance  The distance to translate.
         */
    native public Object3D translateOnAxis(Vector3 axis, double distance);
    native public Object3D translate(double distance, Vector3 axis);
    /**
         * Translates object along x axis by distance.
         * @param distance Distance.
         */
    native public Object3D translateX(double distance);
    /**
         * Translates object along y axis by distance.
         * @param distance Distance.
         */
    native public Object3D translateY(double distance);
    /**
         * Translates object along z axis by distance.
         * @param distance Distance.
         */
    native public Object3D translateZ(double distance);
    /**
         * Updates the vector from local space to world space.
         * @param vector A local vector.
         */
    native public Vector3 localToWorld(Vector3 vector);
    /**
         * Updates the vector from world space to local space.
         * @param vector A world vector.
         */
    native public Vector3 worldToLocal(Vector3 vector);
    /**
         * Rotates object to face point in space.
         * @param vector A world vector to look at.
         */
    native public void lookAt(Vector3 vector);
    /**
         * Adds object as child of this object.
         */
    native public void add(Object3D object);
    /**
         * Removes object as child of this object.
         */
    native public void remove(Object3D object);
    /**
         * Searches through the object's children and returns the first with a matching id, optionally recursive.
         * @param id  Unique number of the object instance
         */
    native public Object3D getObjectById(double id);
    /**
         * Searches through the object's children and returns the first with a matching name, optionally recursive.
         * @param name  String to match to the children's Object3d.name property.
         */
    native public Object3D getObjectByName(String name);
    native public Object3D getObjectByProperty(String name, String value);
    native public Vector3 getWorldPosition(Vector3 optionalTarget);
    native public Quaternion getWorldQuaternion(Quaternion optionalTarget);
    native public Euler getWorldRotation(Euler optionalTarget);
    native public Vector3 getWorldScale(Vector3 optionalTarget);
    native public Vector3 getWorldDirection(Vector3 optionalTarget);
    native public void raycast(Raycaster raycaster, Object intersects);
    native public void traverse(java.util.function.Function<Object3D,Object> callback);
    native public void traverseVisible(java.util.function.Function<Object3D,Object> callback);
    native public void traverseAncestors(java.util.function.Function<Object3D,Object> callback);
    /**
         * Updates local transform.
         */
    native public void updateMatrix();
    /**
         * Updates global transform of the object and its children.
         */
    native public void updateMatrixWorld(Boolean force);
    native public Object toJSON(Meta meta);
    native public Object3D clone(Boolean recursive);
    /**
         *
         * @param object
         * @param recursive
         */
    native public Object3D copy(Object3D source, Boolean recursive);
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void dispatchEvent(EventData event);
    native public Object3D getChildByName(String name);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Meta extends def.js.Object {
        public Object geometries;
        public Object materials;
        public Object textures;
        public Object images;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
    native public Vector3 getWorldPosition();
    native public Quaternion getWorldQuaternion();
    native public Euler getWorldRotation();
    native public Vector3 getWorldScale();
    native public Vector3 getWorldDirection();
    native public Object toJSON();
    @jsweet.lang.Name("clone")
    native public Object3D Clone();
    /**
         *
         * @param object
         * @param recursive
         */
    native public Object3D copy(Object3D source);
}

