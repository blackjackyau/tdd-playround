import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const loginServiceMock = jasmine.createSpyObj('LoginService', ['login']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: LoginService, useClass: loginServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when login method is called', () => {
    beforeEach(() => {
      component.userName = 'userName';
      component.password = 'password';
      component.login();

      fixture.detectChanges();
    });

    describe('when service returns error', () => {

      beforeEach(() => {
        spyOn(loginServiceMock, 'login').and.returnValue(of(false));
      });

      it('should assign error message to model', () => {
        const errorMessage = fixture.nativeElement.querySelector('.error-message').innerText();
        expect(errorMessage).toBe('Invalid Username');
      });
    });
  });
});
