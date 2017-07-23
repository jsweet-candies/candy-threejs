package def.threejs.three;
public class WebGLPrograms extends def.js.Object {
    public WebGLPrograms(WebGLRenderer renderer, Object capabilities){}
    public Object[] programs;
    native public Object[] getParameters(ShaderMaterial material, Object lights, Object fog, Object object);
    native public String getProgramCode(ShaderMaterial material, Object parameters);
    native public WebGLProgram acquireProgram(ShaderMaterial material, Object parameters, String code);
    native public void releaseProgram(WebGLProgram program);
    protected WebGLPrograms(){}
}

