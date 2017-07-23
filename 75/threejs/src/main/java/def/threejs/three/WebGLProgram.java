package def.threejs.three;
public class WebGLProgram extends def.js.Object {
    public WebGLProgram(WebGLRenderer renderer, String code, ShaderMaterial material, WebGLRendererParameters parameters){}
    public double id;
    public String code;
    public double usedTimes;
    public Object program;
    public WebGLShader vertexShader;
    public WebGLShader fragmentShader;
    public Object uniforms;
    public Object attributes;
    native public Object getUniforms();
    native public Object getAttributes();
    native public void destroy();
    protected WebGLProgram(){}
}

