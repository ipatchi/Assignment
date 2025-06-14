import { Router } from 'express';
import { RoleController } from '../controllers/RoleController';
import { authoriseRole } from '../helpers/AuthoriseRole';
import { RoleName } from '../types/RoleName';
export class RoleRouter {
  constructor(private router: Router, private roleController: RoleController) {
    this.addRoutes();
  }
  public getRouter(): Router {
    return this.router;
  }
  private addRoutes() {
    this.router.get(
      '/',
      authoriseRole(RoleName.ADMIN),
      this.roleController.getAll
    );
    this.router.get(
      '/:roleID',
      authoriseRole(RoleName.ADMIN),
      this.roleController.getById
    );
    this.router.post(
      '/',
      authoriseRole(RoleName.ADMIN),
      this.roleController.create
    );
    this.router.delete(
      '/:roleID',
      authoriseRole(RoleName.ADMIN),
      this.roleController.delete
    );
    this.router.patch(
      '/',
      authoriseRole(RoleName.ADMIN),
      this.roleController.update
    );
  }
}
