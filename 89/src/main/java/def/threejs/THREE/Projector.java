package def.threejs.THREE;
/**
 * Projects points between spaces.
 */
public class Projector extends def.js.Object {
    public Projector(){}
    native public Vector3 projectVector(Vector3 vector, Camera camera);
    native public Vector3 unprojectVector(Vector3 vector, Camera camera);
    /**
     * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
     * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
     *
     * @param scene scene to project.
     * @param camera camera to use in the projection.
     * @param sort select whether to sort elements using the Painter's algorithm.
     */
    native public ProjectScene projectScene(Scene scene, Camera camera, Boolean sortObjects, Boolean sortElements);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class ProjectScene extends def.js.Object {
        public Object3D[] objects;
        public Object3D[] sprites;
        public Light[] lights;
        public Face3[] elements;
    }
    /**
     * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
     * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
     *
     * @param scene scene to project.
     * @param camera camera to use in the projection.
     * @param sort select whether to sort elements using the Painter's algorithm.
     */
    native public ProjectScene projectScene(Scene scene, Camera camera, Boolean sortObjects);
}

