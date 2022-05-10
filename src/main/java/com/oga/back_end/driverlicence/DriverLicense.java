package com.oga.back_end.driverlicence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DriverLicense {
    Result result;
    Verification verification;
    Authentication authentication;

    public DriverLicense() {
    }

    @Override
    public String toString() {
        return "DriverLicense{" +
                "result=" + result +
                ", verification=" + verification +
                ", authentication=" + authentication +
                '}';
    }

    public Authentication getAuthentication() {
        return authentication;
    }

    public void setAuthentication(Authentication authentication) {
        this.authentication = authentication;
    }

    public Verification getVerification() {
        return verification;
    }

    public void setVerification(Verification verification) {
        this.verification = verification;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }
}
