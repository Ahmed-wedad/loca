package com.oga.back_end.user;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.oga.back_end.keycloak.KeycloakConfig;

import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;

@Service
public class UserService {
   

  
    public void addUser(UserDTO userDTO,List<String> clientRoles){
        
        CredentialRepresentation credential = Credentials
                .createPasswordCredentials(userDTO.getPassword());
        UserRepresentation user = new UserRepresentation();
        user.setUsername(userDTO.getUserName());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmailId());
        user.setCredentials(Collections.singletonList(credential));
        user.setClientRoles(Map.of("Back_end",clientRoles));
        user.setEnabled(true);
    
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.create(user);
    }
    public void sendVerificationLink(String userId){
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.get(userId)
                .sendVerifyEmail();
    }
    public void deleteUser(String userId){
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.get(userId)
                .remove();
    }
    public void updateUser(String userId, UserDTO userDTO){
        CredentialRepresentation credential = Credentials
                .createPasswordCredentials(userDTO.getPassword());
                
  
        UserRepresentation user = new UserRepresentation();
        user.setUsername(userDTO.getUserName());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmailId());
        user.setCredentials(Collections.singletonList(credential));
    Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.get(userId).update(user);
    }
    public List<UserRepresentation> getUser(String userName){
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        List<UserRepresentation> user = usersResource.search(userName, true);
        return user;
    
    }
    public void sendResetPassword(String userId){
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.get(userId)
                .executeActionsEmail(Arrays.asList("UPDATE_PASSWORD"));
    }
    public void disableUser(String userId){
        Keycloak keycloak =KeycloakConfig.getInstance();
        UsersResource usersResource = keycloak.realm("LOCA").users();
        usersResource.get(userId).toRepresentation().setEnabled(false);
    }
}

