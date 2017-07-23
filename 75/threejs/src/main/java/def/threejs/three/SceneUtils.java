package def.threejs.three;
/** Utility class. */
public class SceneUtils extends def.js.Object {
    private SceneUtils(){}
    native public static Object3D createMultiMaterialObject(Geometry geometry, Material[] materials);
    native public static void detach(Object3D child, Object3D parent, Scene scene);
    native public static void attach(Object3D child, Scene scene, Object3D parent);
}

