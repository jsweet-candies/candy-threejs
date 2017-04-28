package def.threejs.three;
/**
     * A class for displaying particles in the form of variable size points. For example, if using the WebGLRenderer, the particles are displayed using GL_POINTS.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/objects/ParticleSystem.js">src/objects/ParticleSystem.js</a>
     */
public class Points extends Object3D {
    /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
    public Points(Geometry geometry, Material material){}
    /**
         * An instance of Geometry or BufferGeometry, where each vertex designates the position of a particle in the system.
         */
    public jsweet.util.union.Union<Geometry,BufferGeometry> geometry;
    /**
         * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
         */
    public Material material;
    native public void raycast(Raycaster raycaster, Object intersects);
    @jsweet.lang.Name("clone")
    native public Points Clone();
    native public Points copy(Points source);
    /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
    public Points(Geometry geometry){}
    /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
    public Points(){}
    /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
    public Points(BufferGeometry geometry, Material material){}
    /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
    public Points(BufferGeometry geometry){}
}

