package def.threejs.three;
/** This is an automatically generated object type (see the source definition). */
public class UniformsLib extends def.js.Object {
    public static Common common;
    public static Aomap aomap;
    public static Lightmap lightmap;
    public static Emissivemap emissivemap;
    public static Bumpmap bumpmap;
    public static Normalmap normalmap;
    public static Displacementmap displacementmap;
    public static Roughnessmap roughnessmap;
    public static Metalnessmap metalnessmap;
    public static Fog fog;
    public static Lights lights;
    public static Points points;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Common extends def.js.Object {
        public IUniform diffuse;
        public IUniform opacity;
        public IUniform map;
        public IUniform offsetRepeat;
        public IUniform specularMap;
        public IUniform alphaMap;
        public IUniform envMap;
        public IUniform flipEnvMap;
        public IUniform reflectivity;
        public IUniform refractionRation;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Aomap extends def.js.Object {
        public IUniform aoMap;
        public IUniform aoMapIntensity;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Lightmap extends def.js.Object {
        public IUniform lightMap;
        public IUniform lightMapIntensity;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Emissivemap extends def.js.Object {
        public IUniform emissiveMap;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Bumpmap extends def.js.Object {
        public IUniform bumpMap;
        public IUniform bumpScale;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Normalmap extends def.js.Object {
        public IUniform normalMap;
        public IUniform normalScale;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Displacementmap extends def.js.Object {
        public IUniform displacementMap;
        public IUniform displacementScale;
        public IUniform displacementBias;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Roughnessmap extends def.js.Object {
        public IUniform roughnessMap;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Metalnessmap extends def.js.Object {
        public IUniform metalnessMap;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Fog extends def.js.Object {
        public IUniform fogDensity;
        public IUniform fogNear;
        public IUniform fogFar;
        public IUniform fogColor;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Lights extends def.js.Object {
        public IUniform ambientLightColor;
        public DirectionalLights directionalLights;
        public IUniform directionalShadowMap;
        public IUniform directionalShadowMatrix;
        public SpotLights spotLights;
        public IUniform spotShadowMap;
        public IUniform spotShadowMatrix;
        public PointLights pointLights;
        public IUniform pointShadowMap;
        public IUniform pointShadowMatrix;
        public HemisphereLigtts hemisphereLigtts;
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class DirectionalLights extends def.js.Object {
            public String type;
            public Object[] value;
            public Properties properties;
            /** This is an automatically generated object type (see the source definition). */
            @jsweet.lang.ObjectType
            public static class Properties extends def.js.Object {
                public Direction direction;
                public Color color;
                public Shadow shadow;
                public ShadowBias shadowBias;
                public ShadowRadius shadowRadius;
                public ShadowMapSize shadowMapSize;
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Direction extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Color extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Shadow extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowBias extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowRadius extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowMapSize extends def.js.Object {
                    public String type;
                }
            }
        }
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class SpotLights extends def.js.Object {
            public String type;
            public Object[] value;
            public Properties properties;
            /** This is an automatically generated object type (see the source definition). */
            @jsweet.lang.ObjectType
            public static class Properties extends def.js.Object {
                public Color color;
                public Position position;
                public Direction direction;
                public Distance distance;
                public ConeCos coneCos;
                public PenumbraCos penumbraCos;
                public Decay decay;
                public Shadow shadow;
                public ShadowBias shadowBias;
                public ShadowRadius shadowRadius;
                public ShadowMapSize shadowMapSize;
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Color extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Position extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Direction extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Distance extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ConeCos extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class PenumbraCos extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Decay extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Shadow extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowBias extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowRadius extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowMapSize extends def.js.Object {
                    public String type;
                }
            }
        }
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class PointLights extends def.js.Object {
            public String type;
            public Object[] value;
            public Properties properties;
            /** This is an automatically generated object type (see the source definition). */
            @jsweet.lang.ObjectType
            public static class Properties extends def.js.Object {
                public Color color;
                public Position position;
                public Decay decay;
                public Distance distance;
                public Shadow shadow;
                public ShadowBias shadowBias;
                public ShadowRadius shadowRadius;
                public ShadowMapSize shadowMapSize;
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Color extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Position extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Decay extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Distance extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Shadow extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowBias extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowRadius extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class ShadowMapSize extends def.js.Object {
                    public String type;
                }
            }
        }
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class HemisphereLigtts extends def.js.Object {
            public String type;
            public Object[] value;
            public Properties properties;
            /** This is an automatically generated object type (see the source definition). */
            @jsweet.lang.ObjectType
            public static class Properties extends def.js.Object {
                public Direction direction;
                public Skycolor skycolor;
                public GroundColor groundColor;
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Direction extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class Skycolor extends def.js.Object {
                    public String type;
                }
                /** This is an automatically generated object type (see the source definition). */
                @jsweet.lang.ObjectType
                public static class GroundColor extends def.js.Object {
                    public String type;
                }
            }
        }
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Points extends def.js.Object {
        public IUniform diffuse;
        public IUniform opacity;
        public IUniform size;
        public IUniform scale;
        public IUniform map;
        public IUniform offsetRepeat;
    }
}

