package com.oga.back_end.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;


@Data
@Validated
@Component
@ConfigurationProperties(prefix = "jwt.auth.converter")
public class JwtAuthConverterProperties {

    @NotBlank
    private String resourceId;
    private String principalAttribute;
  
    public String getPrincipalAttribute() {
        return principalAttribute;
    }
    public String getResourceId() {
        return resourceId;
    }
    public void setPrincipalAttribute(String pa) {
        principalAttribute=pa;
    }
    public  void setResourceId(String sid) {
        resourceId=sid;
    }
}