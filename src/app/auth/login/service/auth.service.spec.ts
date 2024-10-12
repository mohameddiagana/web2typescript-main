import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  it('authentification ok', () =>{
    expect(service.login('mdiag@samanecorp.com','passer')).toBeTrue();

  });
 it('authentification KO', ()=> {
  expect(service.login('mdiag@samanecorppp.com','passer1234')).toBeFalse();

 });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
