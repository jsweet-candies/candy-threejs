package def.threejs.three;
public class AnimationObjectGroup extends def.js.Object {
    public AnimationObjectGroup(Object... args){}
    public String uuid;
    public Stats stats;
    native public void add(Object... args);
    native public void remove(Object... args);
    native public void uncache(Object... args);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Stats extends def.js.Object {
        public double bindingsPerObject;
        public Objects objects;
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class Objects extends def.js.Object {
            public double total;
            public double inUse;
        }
    }
    protected AnimationObjectGroup(){}
}

