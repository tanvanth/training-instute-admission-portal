package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.RegistrationEntity;
import com.example.demo.Service.RegistrationServ;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class RegistrationControl {
	@Autowired
	private RegistrationServ serv;
	
	@GetMapping("/get")
	public List<RegistrationEntity> showUsers(){	
		return serv.getAllDetails();
	}
	@PostMapping("/add")
	public RegistrationEntity addUser(@RequestBody RegistrationEntity obj) {
		return serv.saveDetails(obj);
	}
	@DeleteMapping("/delete/{id}")
	public String delUser(@PathVariable int Id) {
		serv.deleteById(Id);
		return "Deleted Successfully";
	}
	@GetMapping("/get/{id}")
	public Optional<RegistrationEntity>findById(@PathVariable int Id){
		return serv.findById(Id);
	}
	@PutMapping("/update/{id}")
	public RegistrationEntity update(@PathVariable Long Id,@RequestBody RegistrationEntity s)
	{
		return serv.update(Id,s);
	}
}
