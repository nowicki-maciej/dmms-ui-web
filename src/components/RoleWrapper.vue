<script>
  import { ROLES } from '../helpers/RoleHierarchy';

  export default {
    name: "RoleWrapper",
    functional: true,
    props: ['role'],
    render: function (createElement, context) {
      let isRoleSufficient = function (requiredRole) {
        let currentUserRoleName = context.parent.$store.state.user.role;

        let userRole = ROLES.find(el => el.name === currentUserRoleName);

        let userRoles = [
          userRole,
          ...userRole.isAlso
        ];

        return userRoles.includes(requiredRole);
      };

      let sufficient = isRoleSufficient(context.props.role);

      if (sufficient) {
        return context.children;
      } else {
        return '';
      }
    }
  }
</script>

<style scoped>

</style>
