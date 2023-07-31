package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.RegistrationEntity;

public interface RegistrationRepos extends JpaRepository<RegistrationEntity, Integer> {

}
